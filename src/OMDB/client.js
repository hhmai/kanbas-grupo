const apiKey = '65411a9d';

export const getMovieByTitle = async (title) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
      throw error;
    }
  };

export const getMovieByTitleYear = async (title, year) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&y=${year}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
      throw error;
    }
  }