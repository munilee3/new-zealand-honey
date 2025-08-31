import { RxHamburgerMenu } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { MdErrorOutline } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { TbReload } from "react-icons/tb";

import Popup from 'reactjs-popup'

import './index.css'

const Product = () => {
  return (
    <div className="app-container">
      {/* nav bar section */}
      <nav className='product-nav'>
        <RxHamburgerMenu className="hamburger-icon" />
        <div className="shop-explore-container">
          <p className="shop-explore-text">WHICH MANUKA IS FOR ME?</p>
          <div className="nav-bar-buttons-container">
            <button type="button" className="nav-bar-button">Shop</button>
            <button type="button" className="nav-bar-button">Explore</button>
          </div>
        </div>
        <img src="https://ik.imagekit.io/issupg3so/Link%20%E2%86%92%20SVG.png?updatedAt=1756563254522" alt="logo" />
        <div className="about-contact-buttons-container">
          <button type="button" className="nav-bar-button">About</button>
          <button type="button" className="nav-bar-button">Rewards</button>
          <button type="button" className="nav-bar-button">Contact</button>
        </div>
        <div className="product-icons">
            <RxPerson size={18}/>
            <CiSearch size={18} />
            <BsBag size={18}/>
        </div>
      </nav>
      {/* product images section */}
      <div className="product-main-container">
        <div className="product-image-container">
          <div className="left-right-arrow-img">
            <img className="product-image" src="https://ik.imagekit.io/issupg3so/Container@3x.png?updatedAt=1756658820333" alt="honey" />
          </div>
          <div className="product-items-container">
            <div className="product-small-items-container">
              <img src="https://ik.imagekit.io/issupg3so/58ba0e08b79f094a810ba8be738fe894f88476a2.png?updatedAt=1756621977423" col="6" className="product-small-item-image" alt="product-image"/>
              <img src="https://ik.imagekit.io/issupg3so/cec78d557ced4a60a13cf1970145ab31c50a91f5.png?updatedAt=1756622003960" col="6" className="product-small-item-image" alt="product-image"/>
            </div>
            <img src="https://ik.imagekit.io/issupg3so/89125da6a431c8638008df0699a0659969008765.jpg?updatedAt=1756622909804" className="product-small-items-container" alt="product-image"/>
            <div className="product-small-items-container">
              <img src="https://ik.imagekit.io/issupg3so/fa92b02e035d7f44a3b6c424e8d30e41f82a30ce.png?updatedAt=1756622955284" col="6" className="product-small-item-image" alt="product-image"/>
              <img src="https://ik.imagekit.io/issupg3so/5083dbf10b1310f93fb627c024ace1751e4e1dff.png?updatedAt=1756622954690" col="6" className="product-small-item-image" alt="product-image"/>
            </div>
            <div className="product-small-items-container">
              <img src="https://ik.imagekit.io/issupg3so/fe5dbfcfe027ae1e7e36e7d174edd37c3ca0b9d0.png?updatedAt=1756622955287" col="6" className="product-small-item-image" alt="product-image"/>
              <img src="https://ik.imagekit.io/issupg3so/d625e2acb74e9990ead5626314b86c7ace643f33.png?updatedAt=1756622955801" col="6" className="product-small-item-image" alt="product-image"/>
            </div>
          </div>
        </div>
        <div className="product-details-container">
          <h1 className="product-title">Manuka Honey <br /> <span className="umf">UMF<sup className="tm">TM</sup></span> 24+ <br /> MGO 1122+</h1>
          <Popup trigger={
            <button className="popup-trigger">
                <MdErrorOutline size={20}/>
                <p>What is UMF and MGO?</p>
            </button>
          }
          position="bottom left"
          >{
            close=>(
                <div className="popup-container">
                <div className="popup-inner-content">
                    <p className="popup-header"><span className="umf-span">UMF</span> is the strength and purity rating of Manuka honey.</p>
                    <div>
                    <ul className="popup-list">
                        <li className="popup-item" style={{ color: 'rgba(232, 119, 34, 1)' }}>10+</li>
                        <li className="popup-item" style={{ color: 'rgba(225, 6, 0, 1)' }}>15+</li>
                        <li className="popup-item"  style={{ color: 'rgba(206, 15, 105, 1)' }}>20+</li>
                        <li className="popup-item" style={{ color: 'rgba(131, 0, 101, 1)' }}>24+</li>
                        <li className="popup-item" style={{ color: 'rgba(0, 133, 202, 1)' }}>26+</li>
                        <li className="popup-item" style={{ color: 'rgba(59, 173, 78, 1)' }}>28+</li>
                        <li className="popup-item" style={{ color: 'rgba(32, 62, 150, 1)' }}>30+</li>
                    </ul>
                    <p className="popup-description">The higher the number, the greater the potency and rarity of Manuka honey.</p>
                    </div>
                </div>
                <div className="popup-inner-content">
                    <p className="popup-header"><span className="umf-span">MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
                    <div>
                    <ul className="popup-list">
                        <li className="popup-item" style={{ color: 'rgba(232, 119, 34, 1)' }}>263+</li>
                        <li className="popup-item" style={{ color: 'rgba(225, 6, 0, 1)' }}>514+</li>
                        <li className="popup-item"  style={{ color: 'rgba(206, 15, 105, 1)' }}>829+</li>
                        <li className="popup-item" style={{ color: 'rgba(131, 0, 101, 1)' }}>1122+</li>
                        <li className="popup-item" style={{ color: 'rgba(0, 133, 202, 1)' }}>1282+</li>
                        <li className="popup-item" style={{ color: 'rgba(59, 173, 78, 1)' }}>1450+</li>
                        <li className="popup-item" style={{ color: 'rgba(32, 62, 150, 1)' }}>1620+</li>
                    </ul>
                    <p className="popup-description">The higher the number, the higher the antibacterial properties in the honey.</p>
                    </div>
                </div>
                <button type="button" className="close-button" onClick={() => close()}>Close</button>
            </div>
            )
          }
            
          </Popup>
          <div className="product-rating">
            <p>The Optimiser</p>
            <div className="rating-review-container">
              <div className="rating-container">
                <IoMdHeart size={24} color={"gold"}/>
                <IoMdHeart size={24} color={"gold"}/>
                <IoMdHeart size={24} color={"gold"}/>
                <IoMdHeart size={24} color={"gold"}/>
                <IoMdHeart size={24} color={"gold"}/>
              </div>
              <p className="review-count">825 REVIEWS</p>
            </div>
          </div>
          <p className="product-item-description">For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.</p>
          <div className="product-certification-container">
            <img src="https://ik.imagekit.io/issupg3so/091bee2154df16d16ed70217774440bf225f2900.png?updatedAt=1756624347691" alt="product-certifications" className="product-certifications" />
            <img src="https://ik.imagekit.io/issupg3so/783e7711502694fd9e1b70bbd66f02804411f849.png?updatedAt=1756624347708" alt="product-certifications" className="product-certifications" />
            <img src = "https://ik.imagekit.io/issupg3so/b70a6f585ec0a964285e98003337d6ec3752867c.png?updatedAt=1756624347516" alt="product-certifications" className="product-certifications" />
            <img src="https://ik.imagekit.io/issupg3so/8c97517d9ebbd3a76cb0f638e2c795fd65e3a277.png?updatedAt=1756624347815" alt="product-certifications" className="product-certifications" />
            <img src="https://ik.imagekit.io/issupg3so/2c2fd2a45d55be2cd951d8759843038f01211cd5.png?updatedAt=1756624347396" alt="product-certifications" className="product-certifications" />
            <img src="https://ik.imagekit.io/issupg3so/4988d44823061da38da9b65e1479dcdbc959917d.png?updatedAt=1756624347499" alt="product-certifications" className="product-certifications" />
          </div>
          <div>
            <h1 className="product-size-label">Size (Select One)</h1>
            <p className="product-variant">Variant: 125g | 4.4oz</p>
            <img src="https://ik.imagekit.io/issupg3so/8d93649b099c59282802fa91e97511eef4488f59.png?updatedAt=1756625974609" alt="product-size-image" className="product-size-image" style={{border: "1px solid rgba(241, 180, 52, 1)", borderRadius: "25px"}} />
            <img src="https://ik.imagekit.io/issupg3so/200507dc6ca527981f47be16abbf956084e04dbd.png?updatedAt=1756625974768" alt="product-size-image" className="product-size-image" />
            <img src="https://ik.imagekit.io/issupg3so/d07b7562a11ef9ede254e5ffddc9a19e57a99608.png?updatedAt=1756625974722" alt="product-size-image" className="product-size-image" />
            <img src="https://ik.imagekit.io/issupg3so/7de1f09601655c832d5893519fdcced0e555d0c4.png?updatedAt=1756625974747" alt="product-size-image" className="product-size-image" />
            <img src="https://ik.imagekit.io/issupg3so/f429565081532e5175a5f130ddd6ae84d203fb8c.png?updatedAt=1756625974794" alt="product-size-image" className="product-size-image" />
            <img src="https://ik.imagekit.io/issupg3so/58c66a54fbac705a9aec08ed66696b0281f25e4a.png?updatedAt=1756625974703" alt="product-size-image" className="product-size-image" />
            <img src="https://ik.imagekit.io/issupg3so/9e1262aea547565b6267d2ade6938b34433af5bb.png?updatedAt=1756625974768" alt="product-size-image" className="product-size-image" />
          </div>
          <h1 className="product-size-label">PAYMENT OPTIONS (SELECT ONE)</h1>
          <div className="payment-options-container">
            <div className="one-time-purchase-container">
              <button type="button" className="one-time-purchase-text-container">
                <p className="one-time-purchase-text">One-time purchase</p>
                <p className="one-time-purchase-text">$55.88 USD</p>
              </button>
              <button type="button" className="one-time-save-text-container">
                <p className="one-time-save-text">Subscribe & save 20%</p>
                <p className="one-time-save-text">$44.70 <br/> USD</p>
              </button>
            </div>
            <div className="subscription-container">
              <TbReload size={16}/>
              <p className="subscription-text">What is a subscription?</p>
            </div>
          </div>
          <h1 className="product-size-label">SELECT QUANTITY</h1>
          <div className="quantity-add-to-cart-container">
            <div className="quantity-container">
              <button type="button" className="quantity-button" >-</button>
              <p>1</p>
              <button type="button" className="quantity-button">+</button>
            </div>
            <button type="button" className="add-to-cart-button">
              ADD TO CART
            </button>
          </div>
          <div className="beauty-bundle-main-container">
            <div className="beauty-bundle-container">
              <TfiAngleLeft />
              <p className="beauty-bundle-text">Beauty Bundle</p>
              <TfiAngleRight />
            </div>
            <div className="beauty-bundle-items-price-container">
              <div className="beauty-bundle-items-container">
                <div className="product-items-inner-container">
                  <img src="https://ik.imagekit.io/issupg3so/066620652678ace2a8b18d99958799a6750696c0.png?updatedAt=1756646156320" alt="UMF 20+" className="umf-product-image" />
                  <h1 className="umf-product-title">UMF 20+</h1>
                  <div className="custom-select-wrapper">
                    <select className="custom-select">
                      <option value="250g">250g</option>
                      <option value="500g">500g</option>
                    </select>
                  </div>
                </div>
                <p className="plus-sign">+</p>
                <div className="product-items-inner-container">
                  <img src="https://ik.imagekit.io/issupg3so/327394c3fd8ec3ec3d902b06fa874c76353a27e5.png?updatedAt=1756646157275" alt="UMF 20+" className="umf-product-image" />
                  <h1 className="umf-product-title">UMF 20+</h1>
                  <div className="custom-select-wrapper">
                    <select className="custom-select">
                      <option value="250g">250g</option>
                      <option value="500g">500g</option>
                    </select>
                  </div>
                </div>
                <p className="plus-sign">+</p>
                <div className="product-items-inner-container">
                  <img src="https://ik.imagekit.io/issupg3so/999979079a923079d63d37a1077ca3eeb88fd930.png?updatedAt=1756646156717" alt="UMF 20+" className="umf-product-image" />
                  <h1 className="umf-product-title">UMF 20+</h1>
                  <div className="custom-select-wrapper">
                    <select className="custom-select">
                      <option value="250g">250g</option>
                      <option value="500g">500g</option>
                    </select>
                  </div>
                </div>            
              </div>
              <div>
                <div className="price-container">
                  <p className="original-price">$478.75 USD</p>
                  <p className="discounted-price">$430.88 USD</p>
                  <p className="discount-percentage">Save 10%</p>
                </div>
                <button type="button" className="add-bundle-to-cart-button">ADD BUNDLE TO CART</button>
              </div>
            </div>
          </div>
          <p><img src="https://ik.imagekit.io/issupg3so/a4ae2eaca1629c3adae1c7714b22764214572002%20(1).png?updatedAt=1756652767073" alt="colour club" className="colour-club" /> Colourclub members earn up to <span className="span-56">56</span> reward points when buy this item. Sign up or log in</p>
          <div className="delivery-container">
            <p className="delivery-info">DELIVERY <br />FREE DELIVERY ON ORDERS OVER $30</p>
            <p>ESTIMATED DELIVERY DATE:<br />Jun 9 - Jun 13 to</p>
          </div>
          <hr />
          <h1 className="product-size-label">AFTER PAY</h1>
          <p>or 4 interest-free payments of $13.97 with <span className="afterpay-symbol">$</span><span className="afterpay-text"> Afterpay <MdErrorOutline /> </span></p>
          <hr />
          <h1 className="product-size-label">UMF™ scale</h1>
          <div className="umf-scale-container">
            <p className="umf-scale" style={{ borderColor: 'rgba(232, 119, 34, 1)' }}>UMF™ 10+</p>
            <p className="umf-scale" style={{ borderColor: 'rgba(225, 6, 0, 1)' }}>UMF™ 15+</p>
            <p className="umf-scale" style={{ borderColor: 'rgba(206, 15, 105, 1)' }}>UMF™ 20+</p>
            <p className="umf-scale" style={{ borderColor: 'rgba(131, 0, 101, 1)', borderWidth: '5px' }}>UMF™ 24+</p>
            <p className="umf-scale" style={{ borderColor: 'rgba(0, 133, 202, 1)' }}>UMF™ 26+</p>
            <p className="umf-scale" style={{ borderColor: 'rgba(59, 173, 78, 1)' }}>UMF™ 28+</p>
            <p className="umf-scale" style={{ borderColor: 'rgba(32, 62, 150, 1)' }}>UMF™ 30+</p>
          </div>
          <h1 className="product-size-label">TASTE PROFILE</h1>
          <div class="slider-container">
            <div class="slider-track">
                <div class="slider-knob"></div>
            </div>
            <div class="slider-labels">
                <span class="label left">Clean & Intense</span>
                <span class="label right">Bold & Intense</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
