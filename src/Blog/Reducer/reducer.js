const sampleData = { postTittle: "Sample", postDescription: "sample data to be checked" };

const initialState = { publishedPosts: [sampleData], screen: "new_post", search: "" };

export const publishPostReducer = (state = initialState, action) => {
  if (action.type === "publishPost") {
    return { ...state, publishedPosts: [...state.publishedPosts, action.value] };
  }

  if (action.type === "navigate") {
    return { ...state, screen: action.value };
  }

  if (action.type === "search_post") {
    return { ...state, search: action.value };
  }
  return state;
};
