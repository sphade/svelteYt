export const load = async ({ fetch }) => {
 
    
    const res = await fetch("https://dummyjson.com/products");
    const post = await res.json()
  

  return {
    post,
  };
};
