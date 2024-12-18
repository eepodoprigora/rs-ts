const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Comment {
  id: number;
  email: string;
}

const getData = async <T>(url: string): Promise<T[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error loading data");
  }
  const data: T[] = await response.json();

  return data;
};

getData<Comment>(COMMENTS_URL)
  .then((data) => {
    data.forEach((comment) => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
