<template lang="pug">
  transition(name='modal')
    .modal-mask
      .modal-wrapper
        .modal-container
          .modal-header
            slot(name='header')
          div.col-12
            b-form-input(v-model="item.name" placeholder="Enter bank name")
            b-form-input(v-model="item.shortName" placeholder="Enter bank code")
            b-form-input(v-model="item.country" placeholder="Enter country")
            b-form-input(v-model="item.url" placeholder="Enter url")
          .modal-footer
            slot(name='footer')
              b-button(variant="outline-primary" @click="$emit('cancel', item)") Cancel
              b-button(v-if="!newItem" variant="danger" @click="deleteItem(item)") Delete
              b-button(variant="success" @click="save(item)") Save
</template>

<script>
export default {
  props: {
    newItem: {
      type: Boolean,
      default: true
    },
    bank: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      item: {
        name: "",
        shortName: "",
        country: "",
        url: ""
      }
    };
  },
  async created() {
    if (!this.addNew) {
      this.item = { ...this.bank };
    }
  },
  methods: {
    save(item) {
      if (this.newItem) {
        this.$emit("save", item);
      } else {
        this.$emit("update", item);
      }
    },
    deleteItem(item) {
      if (confirm("Are you sure that you want to delete selected item?")) {
        this.$emit("delete", item);
      } else {
        this.$emit("cancel");
      }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
