import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import Card from "./Card"; // Import your Card component

const MoreAbout = () => {
  const location = useLocation();
  const { state } = location;
  const [cardData, setCardData] = useState(null);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get("https://api.blog.redberryinternship.ge/api/blogs", {
        headers: {
          Authorization: `Bearer f588e1ea4ab749169c32af4183b3bd955467fa1692f8ce7939fa6ddd8befe960`,
        },
      })
      .then((response) => {
        const getData = response.data.data;
        setOriginalData(getData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    // Set card data if available
    if (state && state.cardData) {
      setCardData(state.cardData);
    }
  }, [state]);

  if (loading) {
    // Show a loading state
    return <p>Loading...</p>;
  }

  if (!cardData) {
    // Data is not available yet, render a message or nothing
    return <p>No card data found.</p>;
  }

  const { image, auth, date, title, cate, desc } = cardData;

  // Filter blogs based on the category title of the rendered card
  const filteredBlogs = originalData.filter((blog) =>
    cate.some((categoryId) =>
      blog.categories.some((category) => category.id === categoryId)
    )
  );

  return (
    <div>
      <Header />
      {/* Render the card information on the new page */}
      <img src={image} alt="unsplash" />
      <p>{auth}</p>
      <h5>{date}</h5>
      <h2>{title}</h2>
      <h2>{cate}</h2>
      <h2>{desc}</h2>
      {/* Render other card information as needed */}

      {/* Render other cards with similar categories from the backend */}
      {filteredBlogs.map((blog) => (
        <Card
          key={blog.id}
          image={blog.image}
          auth={blog.auth}
          date={blog.date}
          title={blog.title}
          cate={blog.categories.map((category) => category.id)}
          desc={blog.desc}
        />
      ))}
    </div>
  );
};

export default MoreAbout;
