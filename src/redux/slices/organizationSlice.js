import { createSlice } from '@reduxjs/toolkit'
import organizations from '../../data/fakeJSONData.json'
import { setItems, getItems } from '../../helpers/localStorage'
import { uid } from 'uid'

// setItems('organizations', organizations)

const initialState = {
  organizations:
    getItems('organizations') === null || undefined
      ? []
      : getItems('organizations'),
  count:
    getItems('organizations') === null || undefined
      ? 0
      : getItems('organizations').length,
  searchedValue: '',
  filteredData: [],
  newCompany: {
    trackingInUse: 0,
    trackingAssigned: 0,
    protectionInUse: 0,
    protectionAssigned: 0,
  },
}

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.searchedValue = action.payload
        .toLowerCase()
        .trim()
        .replace(/\s/g, '')
      state.filteredData = state.organizations.filter((item) => {
        return item.name
          .toLowerCase()
          .trim()
          .replace(/\s/g, '')
          .includes(state.searchedValue)
      })
    },
    handleChangeInputs: (state, action) => {
      let updatedState = { ...state.newCompany, ...action.payload }
      state.newCompany = updatedState
    },
    handleAddCompany: (state, payload) => {
      const id = uid()
      const updatedOrganizations = [
        ...state.organizations,
        { ...state.newCompany, id },
      ]
      state.organizations = updatedOrganizations
      state.count = updatedOrganizations.length
      setItems('organizations', updatedOrganizations)
      state.newCompany = {
        trackingInUse: 0,
        trackingAssigned: 0,
        protectionInUse: 0,
        protectionAssigned: 0,
      }
    },
    handleDeleteCompany: (state, action) => {
      const id = action.payload
      const filteredCompanies = state.organizations.filter(
        (item) => item.id !== id,
      )
      state.organizations = filteredCompanies
      state.count = filteredCompanies.length
      setItems('organizations', state.organizations)
    },
  },

  extraReducers: (builder) => {},
})

export const {
  deleteOrganization,
  filterData,
  handleChangeInputs,
  handleAddCompany,
  handleDeleteCompany,
} = organizationSlice.actions

export const selectOrganizations = (state) => state.organization.organizations
export const selectCount = (state) => state.organization.count
export const selectSearchedValue = (state) => state.organization.searchedValue
export const selectFilteredData = (state) => state.organization.filteredData

export default organizationSlice.reducer
