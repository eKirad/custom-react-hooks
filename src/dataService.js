const DataService = {
    getAll: async ({ baseUrl, resourcePath, queryParams }) => {
        const { limit, page, search, criteria, sortField, sortOrder } = queryParams
        const response = await fetch(`${baseUrl}/${resourcePath}?limit=${limit}&page=${page}&search=${search}&criteria=${criteria}&sort=${sortField}&order=${sortOrder}`)
        const result = await response.json()

        return result
    },
}

export default DataService
