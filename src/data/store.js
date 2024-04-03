import { reactive } from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  movieList: [],
  queryParams: {
    query: 'Matrix',
    api_key: '40246d4641add54598a461d6400ea0fb',
    language: 'it-IT'
  }
})