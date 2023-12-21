import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.blog.redberryinternship.ge/api/blogs", {
        headers: {
          Authorization: `Bearer f588e1ea4ab749169c32af4183b3bd955467fa1692f8ce7939fa6ddd8befe960`,
        },
      })
      .then((response) => {
        const getData = response.data.data;
        setData(getData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-[#F3F2FA] bg-cover">
      <div className="w-[1440px] h-[2714px] flex justify-center bg-[#F3F2FA] m-auto">
        <div className="w-[1288px] h-[2648px] bg-[#F3F2FA] grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(4,_1fr)] gap-y-[56px] gap-x-[32px] ">
          {data.map((item) => (
            <Card
              key={item.id}
              auth={item.author}
              image={item.image}
              date={item.publish_date}
              title={item.title}
              desc={item.description}
              cate={item.categories.map((cat, i) => {
                return cat.id;
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
