<template lang="pug">
  div
    b-button(variant="danger" @click="addItem()") Add new bank
    hr
    b-table(striped hover selectable select-mode="single" :items="banks" @row-clicked="onRowClicked")
    add-edit-delete-dialog(v-if="showModal" @cancel="showModal=false" @delete="deleteItem" @update="updateItem" @save="saveItem" :bank="selectedBank" :newItem="newItem")
      h5(slot="header") {{ header }}
</template>

<script>
import AddEditDeleteDialog from "./AddEditDeleteDialog";
export default {
  components: {
    AddEditDeleteDialog
  },
  data() {
    return {
      banks: [],
      showModal: false,
      newItem: null,
      header: "",
      selectedBank: {}
    };
  },
  async created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const response = await this.$axios.get("/data/banks");
      if (response) {
        this.banks = response.data;
      }
    },
    addItem() {
      this.header = "Add new bank";
      this.newItem = true;
      this.selectedBank = {};
      this.showModal = true;
    },
    onRowClicked(row) {
      this.header = "Edit/Delete existing bank";
      this.newItem = false;
      this.showModal = true;
      this.selectedBank = row;
    },
    async updateItem(item) {
      const response = await this.$axios.put("/data/banks", { data: item });
      if (response) {
        this.loadData();
        alert("An item has been updated.");
      }
      this.showModal = false;
    },
    async saveItem(item) {
      const response = await this.$axios.post("/data/banks", { data: item });
      if (response) {
        this.loadData();
        alert("An item has been added.");
      }
      this.showModal = false;
    },
    async deleteItem(item) {
      this.showModal = false;
      const response = await this.$axios.delete(`/data/banks/${item.id}`);
      if (response) {
        this.loadData();
        alert("An item has been deleted.");
      }
    }
  }
};
</script>
