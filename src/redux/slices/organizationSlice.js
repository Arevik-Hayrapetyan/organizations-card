import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import organizations from '../../data/fakeJSONData.json'
import { setItems, getItems } from '../../helpers/localStorage'

setItems('organizations', organizations)

const initialState = {
  organizations:
    getItems('organizations') === null || undefined
      ? []
      : getItems('organizations'),
  count: organizations.length,
  searchedValue: '',
  filteredData: [],
}

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    deleteOrganization: (state, action) => {},
    handleSearchedInput: (state, action) => {
      // console.log(action.payload, "payloadddd")
      state.searchedValue = action.payload.sear
    },
    filterData: (state, action) => {
      state.searchedValue = action.payload.toLowerCase().trim()
      state.filteredData = state.organizations.filter((item) =>
        item.name
          .toLowerCase()
          .trim()
          .includes(state.searchedValue),
      )
      console.log("filtereddata", state.filteredData)
    },
  },

  extraReducers: (builder) => {},
})

export const {
  deleteOrganization,
  handleSearchedInput,
  filterData,
} = organizationSlice.actions

export const selectOrganizations = (state) => state.organization.organizations
export const selectCount = (state) => state.organization.count
export const selectSearchedValue = (state) => state.organization.searchedValue
export const selectFilteredData = (state) => state.organization.filteredData

export default organizationSlice.reducer
