import { createSlice } from '@reduxjs/toolkit'
import { setItems, getItems } from '../../helpers/localStorage'
import { uid } from 'uid'

const initialState = {
  organizations:
    getItems('organizations') === null || undefined
      ? []
      : getItems('organizations'),
  count:
    getItems('organizations') === null || undefined
      ? 0
      : getItems('organizations').length,
  filteredDataCount: 0,
  searchedValue: '',
  filteredData: [],
  slicedData: [],
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
      state.slicedData = state.filteredData.slice(0, 2)
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

      const filteredSlicedCompanies = state.slicedData.filter(
        (item) => item.id !== id,
      )

      const updatedFilteredData = state.slicedData.filter(
        (item) => item.id !== id,
      )

      state.organizations = filteredCompanies
      state.slicedData = filteredSlicedCompanies
      state.filteredData = updatedFilteredData
      state.count = filteredCompanies.length

      setItems('organizations', state.organizations)
    },
    handleSliceData: (state, action) => {
      const start = action.payload * 2 - 2
      const end = start + 2
      state.slicedData = state.organizations.slice(start, end)
    },
  },
})

export const {
  deleteOrganization,
  filterData,
  handleChangeInputs,
  handleAddCompany,
  handleDeleteCompany,
  getFilteredCompaniesSize,
  handleSliceData,
} = organizationSlice.actions

export const selectOrganizations = (state) => state.organization.organizations
export const selectCount = (state) => state.organization.count
export const selectSearchedValue = (state) => state.organization.searchedValue
export const selectFilteredData = (state) => state.organization.filteredData
export const selectFilteredDataCount = (state) =>
  state.organization.filteredDataCount
export const selectSlicedData = (state) => state.organization.slicedData
export default organizationSlice.reducer
