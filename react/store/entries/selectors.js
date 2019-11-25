import { createSelector } from "reselect";

const storeSelector = state => state.entries;

const entriesItemsSelector = createSelector(
  storeSelector,
  entries => entries.items
);

const filterTextSelector = createSelector(storeSelector, entries =>
  entries.filterText.toLowerCase()
);

const filteredEntriesItemsSelector = createSelector(
  entriesItemsSelector,
  filterTextSelector,
  (items, filterText) =>
    items.filter(item => item.title.toLowerCase().indexOf(filterText) > -1)
);

export default {
  storeSelector,
  entriesItemsSelector,
  filterTextSelector,
  filteredEntriesItemsSelector
};
