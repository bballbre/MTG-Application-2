import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Magic The Gathering Variant Singles</h1>
      <button type='submit' id='checkout'>
        <img
          src='Images/shoppingCart.jpg'
          alt='checkoutButton'
          width={50}
          height={50}
        />
        <br />
        <strong>CheckOut</strong>
        <br />
        Download Cart
        <br />
        to CSV File
      </button>
      <fieldset id='mabelField' className='fields'>
        <legend className='legends'>Mabel, Heir to Cragflame</legend>
        <div className='divPictures'>
          <img
            src='Images/bloomburrow-variants-299467.png'
            id='mabelPic'
            className='pictures'
            alt='mabel'
            width={300}
            height={350}
          />
        </div>
        <div className='details'>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td id='mabel' className='names'>
                  Mabel, Heir to Cragflame
                </td>
              </tr>
              <tr>
                <td>Edition:</td>
                <td>Bloomborrow Variants</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Legendary Creature - Mouse Soldier</td>
              </tr>
              <tr>
                <td>Rarity:</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Collector #:</td>
                <td>0351</td>
              </tr>
              <tr>
                <td>Pow/Tuf:</td>
                <td>3/3</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: "justify" }}>
                  Other Mice you control get +1/+1 When Mabel, Heir to Cragflame
                  enters, create Cragflame, a legendary colorless Equipment
                  artifact token with "Equipped creature gets +1/+1 and has
                  vigilance, trample, and haste" and equip 2.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='forms'>
          <form id='mabelCart' className='theForms'>
            <label className='price' id='mabelPrice'>
              $88.99
            </label>
            <br />
            <select name='quantity' className='quantity' id='mabelQuantity'>
              <option value={0} selected=''>
                0
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <input
              type='submit'
              className='submit'
              defaultValue='Add to Cart'
            />
            <button type='reset' className='trash'>
              <img
                src='Images/trashcan.jpeg'
                alt='trash'
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
      </fieldset>
      <br />
      <fieldset id='razorkinField' className='fields'>
        <legend className='legends'>Razorkin Needlehead</legend>
        <div className='divPictures'>
          <img
            src='Images/duskmourn-house-of-horror-variants-301426.png'
            className='pictures'
            id='razorkinPic'
            alt='Razorkin'
            width={300}
            height={350}
          />
        </div>
        <div className='details'>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td id='raz' className='names'>
                  Razorkin Needlehead
                </td>
              </tr>
              <tr>
                <td>Edition:</td>
                <td>
                  Duskmoourn: House of Horror
                  <br />
                  Variants
                </td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Creature - Human Assassin</td>
              </tr>
              <tr>
                <td>Rarity:</td>
                <td>R</td>
              </tr>
              <tr>
                <td>Collector #:</td>
                <td>0347</td>
              </tr>
              <tr>
                <td>Pow/Tuf:</td>
                <td>2/2</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: "justify" }}>
                  Razorkin Needlehead has first strike during your turn.
                  <br />
                  Whenever an opponent draws a card, Razorkin Needlehead deals 1
                  damage to them.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='forms'>
          <form id='razorkinCart' className='theForms'>
            <label className='price' id='razorkinPrice'>
              $12.99
            </label>
            <br />
            <select name='quantity' className='quantity' id='razorkinQuantity'>
              <option value={0} selected=''>
                0
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <input
              type='submit'
              className='submit'
              defaultValue='Add to Cart'
            />
            <button type='reset' className='trash'>
              <img
                src='Images/trashcan.jpeg'
                alt='trash'
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
      </fieldset>
      <br />
      <div id='divDisplay'>
        <table id='display'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody id='tbody'></tbody>
        </table>
      </div>
      <br />
    </>
  );
}

export default App;
