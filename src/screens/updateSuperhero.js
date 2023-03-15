import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSuperhero = () => {
  const BASE_URL = "https://rich-rose-panda-gear.cyclic.app";
  const id = useParams().id;
  const [Superhero, setSuperhero] = useState({});
  const [Powerstats, setPowerstats] = useState({});

  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Intelligence, setIntelligence] = useState(0);
  const [Strength, setStrength] = useState(0);
  const [Speed, setSpeed] = useState(0);
  const [Durability, setDurability] = useState(0);
  const [Power, setPower] = useState(0);
  const [Combat, setCombat] = useState(0);
  const [PublisherId, setPublisherId] = useState(0);

  const [Publishers, setPublishers] = useState([]);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const superhero = {
      id: id,
      name: Name,
      image: Image,
      powerstats: {
        intelligence: Intelligence,
        strength: Strength,
        speed: Speed,
        durability: Durability,
        power: Power,
        combat: Combat,
      },
      publisherId: PublisherId,
      publisher: Publishers.find((val) => val.id === PublisherId).name,
    };

    const updateSuperhero = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.put(
          `${BASE_URL}/superheroes/${id}`,
          superhero,
          config
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    updateSuperhero();
    navigate("/superheroes");
  };

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fetchSuperhero = async () => {
      const { data } = await axios.get(`${BASE_URL}/superheroes/${id}`, config);
      setSuperhero(data);
      setPowerstats(data.powerstats);

      setName(Superhero.name);
      setImage(Superhero.image);
      setPublisherId(Superhero.PublisherId);
      setIntelligence(Powerstats.intelligence);
      setStrength(Powerstats.strength);
      setSpeed(Powerstats.speed);
      setDurability(Powerstats.durability);
      setPower(Powerstats.power);
      setCombat(Powerstats.combat);
    };
    fetchSuperhero();
  }, [
    id,
    Superhero.name,
    Superhero.image,
    Superhero.PublisherId,
    Powerstats.Intelligence,
    Powerstats.Strength,
    Powerstats.speed,
    Powerstats.durability,
    Powerstats.power,
    Powerstats.combat,
  ]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fetchPublishers = async () => {
      const { data } = await axios.get(`${BASE_URL}/publishers`, config);

      setPublishers(data);
    };

    fetchPublishers();
    // fetchSuperhero();
  }, [id]);

  return (
    <div id="formComponent">
      <form
        onSubmit={submitHandler}
        className="container mx-auto md:px-48 sm:px-16 min-[220px]:px-8 py-24 flex flex-col"
      >
        <div className="font-bold text-3xl text-green-600 underline underline-offset-4">
          Insert Superhero Info:{" "}
        </div>
        <label htmlFor="name" className="font-bold text-2xl text-white py-3">
          Name:
          <input
            className="w-full outline outline-1 outline-black bg-slate-500/50 rounded rounded-md shadow shadow-xl shadow-green-500/40 p-2 mt-1"
            type="text"
            name="name"
            id=""
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="image" className="font-bold text-2xl text-white py-3">
          Image Url:{" "}
          <input
            className="w-full outline outline-1 outline-black bg-slate-500/50 rounded rounded-md shadow shadow-xl shadow-green-500/40 p-2 mt-1"
            type="text"
            name="image"
            id=""
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <div className="font-bold text-2xl text-white pt-3 pb-1">
          Powerstats:{" "}
        </div>
        <label
          htmlFor="intelligence"
          className="font-bold text-lg text-white py-2"
        >
          Intelligence:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="intelligence"
            id=""
            min={0}
            max={100}
            value={Intelligence}
            onChange={(e) => setIntelligence(e.target.value)}
          />
        </label>

        <label htmlFor="strength" className="font-bold text-lg text-white py-2">
          Strength:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="strength"
            id=""
            min={0}
            max={100}
            value={Strength}
            onChange={(e) => setStrength(e.target.value)}
          />
        </label>

        <label htmlFor="speed" className="font-bold text-lg text-white py-2">
          Speed:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="speed"
            id=""
            min={0}
            max={100}
            value={Speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </label>

        <label
          htmlFor="durability"
          className="font-bold text-lg text-white py-2"
        >
          Durability:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="durability"
            id=""
            min={0}
            max={100}
            value={Durability}
            onChange={(e) => setDurability(e.target.value)}
          />
        </label>

        <label htmlFor="power" className="font-bold text-lg text-white py-2">
          Power:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="power"
            id=""
            min={0}
            max={100}
            value={Power}
            onChange={(e) => setPower(e.target.value)}
          />
        </label>

        <label htmlFor="combat" className="font-bold text-lg text-white py-2">
          Combat:
          <input
            className="w-full accent-green-500 bg-gray-500"
            type="range"
            name="combat"
            id=""
            min={0}
            max={100}
            value={Combat}
            onChange={(e) => setCombat(e.target.value)}
          />
        </label>

        <label
          htmlFor="publisher"
          className="font-bold text-lg text-white py-3"
        >
          <div className="font-bold text-2xl text-white pt-3 pb-1">
            Publisher:{" "}
          </div>
          {!Publishers.length ? (
            <button type="button" onClick={() => navigate(`/publishers`)}>
              Add a new publisher
            </button>
          ) : (
            <select
              className="w-full bg-green-500/30 focused:bg-green-500 text-white accent-green-500 p-4"
              name="publisher"
              id=""
              value={PublisherId}
              onClick={(e) => setPublisherId(e.target.value)}
            >
              {Publishers.map((publisher) => (
                <option
                  key={publisher.id}
                  value={publisher.id}
                  className="bg-green-500 text-white"
                >
                  {publisher.name}
                </option>
              ))}
            </select>
          )}
        </label>

        <button
          type="submit"
          className="font-bold text-lg text-white py-3 mx-28 min-[220px]:mx-4 my-4 bg-green-700 rounded rounder-xl outline outline-1 outline-black shadow shadow-xl shadow-green-400/40"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateSuperhero;
