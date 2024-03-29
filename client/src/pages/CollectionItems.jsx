import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const mock = {
  ["1"]: {
    books: ["finansist", "triumfarka"],
    watches: ["longines", "tissot"],
  },
  ["2"]: {
    books: ["warsII", "5ringsbooks"],
    watches: ["casio", "orient"],
  },
};
// запрашивает данные из бд
const getData = (name, id) => {
  return Promise.resolve(mock[id][name]);
};

const CollectionItems = () => {
  const { name, id } = useParams();
  console.log(name, id);
  const mockid = "1";
  const [data, setData] = useState([]);
  useEffect(() => {
    // receving data
    getData(name, mockid)
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.error(e);
      });
  });

  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        repellendus pariatur natus. Distinctio libero est aperiam tempora optio
        eius, veritatis nobis odio nihil sunt, sequi ipsum a cupiditate et
        explicabo doloribus! Iure possimus veniam cumque deleniti sit
        praesentium accusamus rem provident a odio. Praesentium, doloremque
        dolores? Aliquam obcaecati, vero earum sapiente officia odio ullam sit
        officiis quisquam corrupti distinctio magni nostrum consequuntur
        consectetur porro delectus et quod cumque accusamus, animi culpa. Esse
        amet voluptatum iure delectus. Iure, corporis. Consequatur, earum
        architecto molestiae quidem quasi eos atque cumque nostrum libero
        cupiditate repudiandae ipsam minima sint non eaque culpa dolorum
        doloremque sapiente quaerat illo? Ullam quaerat sequi, voluptatum
        asperiores architecto earum unde doloremque voluptatibus laborum iure,
        mollitia quo id corporis est explicabo quod beatae minima consectetur
        eligendi culpa ab temporibus! Explicabo, odit quos facere harum
        architecto eaque fugit qui, non numquam molestias aliquam aut eligendi
        rerum voluptatum earum saepe? Dignissimos quam ipsam, explicabo dolore
        officia dolor voluptas non modi ut nisi saepe ipsum numquam dolorum
        error maiores. Corrupti doloremque exercitationem hic culpa perferendis
        deleniti id ducimus eos commodi? Repellendus eius exercitationem porro
        mollitia, modi atque? Rerum, earum cupiditate repellendus aspernatur
        incidunt omnis modi odit, laudantium velit, vitae blanditiis corrupti
        assumenda quos eos dolorem ratione! Labore illo ducimus ad animi,
        facilis expedita quidem, velit in consectetur dolores quisquam commodi
        vel, temporibus enim esse. Hic molestiae, a rerum nesciunt dicta ab
        beatae rem? Iusto assumenda porro repellendus magni dolorum, ipsa sint
        quas veniam officiis quaerat eos mollitia incidunt voluptate quam ex ab
        suscipit corrupti. Aliquam nostrum quibusdam sapiente vitae. Neque
        suscipit odit debitis sunt perspiciatis nesciunt nihil fugiat eum quidem
        quo? Ab rem labore quos itaque dolorum natus nemo temporibus quo
        molestiae vel maxime sed magni neque ut minima quibusdam dolor id,
        sapiente odio! Modi voluptatem ab vel autem enim repellat, aspernatur
        molestias voluptatum!
      </div>
      {data.map((item) => {
        return <p>{item}</p>;
      })}
    </>
  );
};

export default CollectionItems;
