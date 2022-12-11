import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const initialState = {
  foodname: "",
  description: "",
  ingredients: "",
  country: "",
  servings: "",
  rating: "",
  instructions: "",
  image: "",
};

const SingleRecipe = () => {
  const [inputs, setInputs] = useState(initialState);
  const [recipe, setRecipe] = useState();
  const [bookmark, setBookmark] = useState(false);
  const [like, setLike] = useState(false);

  const [show, setAddRecipeShow] = useState(false);

  const handleAddRecipeClose = () => setAddRecipeShow(false);
  const handleAddRecipeShow = () => setAddRecipeShow(true);

  const { recipeId } = useParams();
  const navigate = useNavigate();

  const loadRecipe = useCallback(async (rid) => {
    const res = await axios.get(`https://recipes-fed.onrender.com/recipes/${rid}`);

    setRecipe(res.data);
  }, []);

  useEffect(() => {
    if (!recipeId) return;
    loadRecipe(recipeId);
  }, [recipeId, loadRecipe]);

  // destructuring

  useEffect(() => {
    if (!recipe || recipe.id === inputs.id) return;
    const {
      id,
      ingredients,
      foodname,
      image,
      servings,
      rating,
      instructions,
      country,
      description,
    } = recipe;
    setInputs({
      ...inputs,
      id,
      ingredients,
      foodname,
      image,
      servings,
      rating,
      instructions,
      country,
      description,
    });
  }, [recipe, inputs]);

  // link to the specific url
  const shareUrl = useMemo(() => {
    if (recipe) return `/recipes/${recipe.id}`;
  }, [recipe]);

  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure want to delete "${inputs.foodname}"`)) {
      axios.delete(`${"https://recipes-fed.onrender.com/recipes"}/${id}`);
      toast.success("Deleted Successfully");
      navigate("/recipes");
    } else {
      toast.error("Be keen on what you want to delete");
    }
  };

  const handleRecipeUpdate = () => {
    axios.put(`https://recipes-fed.onrender.com/recipes/${recipe.id}`, inputs);
    toast.success("Updated Successfully");
    navigate("/recipes");
  };

  const handleUpdate = () => {};

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="single__container">
      <div className="single">
        <div className="right">
          <div className="right-header">
            <div className="d-flex align-items-center justify-content-between p-4">
              <div className="" onClick={handleAddRecipeShow}>
                <span
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "50rem",
                    height: "25px",
                    width: "25px",
                    padding: "5px",
                  }}
                  onClick={() => handleUpdate(inputs.id)}
                >
                  <BsPencilSquare />
                </span>
              </div>
              <div className="">
                <span
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "50rem",
                    height: "25px",
                    width: "25px",
                    padding: "5px",
                  }}
                  onClick={() => handleDelete(inputs.id)}
                >
                  <AiOutlineDelete />
                </span>
              </div>
            </div>
            <div className="right-name">
              <h2 className="creepster">{inputs.foodname}</h2>
              <div className="icons cursor">
                <span
                  className={bookmark ? "bookmark" : ""}
                  onClick={() => setBookmark(true)}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{ marginLeft: "20", paddingTop: "0" }}
                  />
                </span>
                <span
                  className={like ? "like" : ""}
                  onClick={() => setLike(true)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ marginLeft: "20", paddingTop: "0" }}
                  />
                </span>
              </div>
            </div>
            <div className="right-details">
              <h4 className="oswald">
                Serves:{" "}
                <span className="bg-success badge">{inputs.servings}</span>
              </h4>
              <h4>{/* Time: <span>{total_time_string}</span> */}</h4>
              <h4 className="oswald">
                Country:{" "}
                <span className="bg-success badge">{inputs.country}</span>
              </h4>
            </div>
            <div className="right-details-desc">
              <p>{inputs.description}</p>
            </div>
            <div className="right-selectors">
              <p className="new">Ingredients</p>
            </div>
          </div>
          <div className="right-bottom">
            <div className="bottom one">
              <pre className="pre">
                <code>{inputs.ingredients}</code>
              </pre>
            </div>
          </div>
          <div className="right-selectors bg-procedure">
            <p className="new procedure__title">Procedure</p>
          </div>
          <div className="right-bottom">
            <div className="bottom one">
              <pre className="pre">
                <code>{inputs.instructions}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* add recipe modal */}
        <>
          <Modal
            show={show}
            onHide={handleAddRecipeClose}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="AddRecipe">
                <form onSubmit={handleRecipeUpdate}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="foodname"
                    placeholder="name:"
                    onChange={handleChange}
                    value={inputs.foodname}
                  />
                  <br />

                  <label>Description:</label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="full description:"
                    value={inputs.description}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Ingredients:</label>
                  <input
                    type="text"
                    name="ingredients"
                    value={inputs.ingredients}
                    placeholder="onions, ginger, eggs,..."
                    onChange={handleChange}
                  />

                  <br />
                  <label>Write your procedure instructions:</label>
                  <textarea
                    type="text"
                    name="instructions"
                    placeholder="write your instructions:"
                    value={inputs.instructions}
                    onChange={handleChange}
                  />

                  <div className="short">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      value={inputs.country}
                      placeholder="country"
                      onChange={handleChange}
                    />
                    <br />
                    <label>servings:</label>
                    <input
                      type="number"
                      name="servings"
                      value={inputs.servings}
                      placeholder="2"
                      onChange={handleChange}
                    />

                    <br />

                    <label>Rating:</label>
                    <input
                      type="number"
                      name="rating"
                      value={inputs.rating}
                      placeholder="0 - 10"
                      onChange={handleChange}
                    />
                    <br />

                    <label>Image:</label>
                    <input
                      type="text"
                      name="image"
                      value={inputs.image}
                      placeholder="Paste image url/link"
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    className="btn btn-primary border m-4"
                    variant="contained"
                    type="submit"
                  >
                    Update
                  </Button>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default SingleRecipe;
