const urls = {
  contributeToDatabase: '/api/contribute-to-database',
  tableData: '/api/table-data'
};

if (process.env.REACT_APP_DEBUG === 'true') {
  Object.entries(urls).forEach(([key, value]) => {
    urls[key] = `http://localhost:5000${value}`
  })
}

export default urls
