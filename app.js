const menu = [
  {id:"lamb-doner",cat:"kebabs",name:"Lamb doner",sizes:[["Medium",7],["Large",8]],desc:"Served with pitta or wrap",icon:"🥙"},
  {id:"chicken-doner",cat:"kebabs",name:"Chicken doner",sizes:[["Medium",7],["Large",8]],desc:"Served with pitta or wrap",icon:"🥙"},
  {id:"mixed-doner",cat:"kebabs",name:"Mixed doner kebab",sizes:[["Medium",8],["Large",9]],desc:"Lamb doner & chicken doner",icon:"🥙"},
  {id:"chicken-shish",cat:"kebabs",name:"Chicken shish",sizes:[["Medium",7.5],["Large",8.5]],desc:"Served with pitta or wrap",icon:"🍢"},
  {id:"lamb-meat-chips",cat:"kebabs",name:"Lamb doner meat & chips",price:9.5,icon:"🍟"},
  {id:"chicken-meat-chips",cat:"kebabs",name:"Chicken doner meat & chips",price:9.5,icon:"🍟"},
  {id:"mixed-meat-chips",cat:"kebabs",name:"Mixed doner meat & chips",price:10.5,icon:"🍟"},
  {id:"halloumi-kebab",cat:"kebabs",name:"Halloumi kebab",price:7,icon:"🥗"},
  {id:"falafel-kebab",cat:"kebabs",name:"Falafel kebab",price:7,icon:"🥙"},
  {id:"chips-kebab",cat:"kebabs",name:"Chips kebab",price:5,icon:"🍟"},
  {id:"salad-kebab",cat:"kebabs",name:"Salad kebab",price:5,icon:"🥗"},
  {id:"quarter-beef",cat:"burgers",name:"¼ beef burger",price:5,icon:"🍔"},
  {id:"quarter-cheese",cat:"burgers",name:"¼ beef burger with cheese",price:5.5,icon:"🍔"},
  {id:"half-beef",cat:"burgers",name:"½ beef burger",price:6.7,icon:"🍔"},
  {id:"half-cheese",cat:"burgers",name:"½ beef burger with cheese",price:7.2,icon:"🍔"},
  {id:"chicken-burger",cat:"burgers",name:"Single chicken burger",price:5,icon:"🍔"},
  {id:"veggie-burger",cat:"burgers",name:"Veggie burger",price:4.9,icon:"🍔"},
  {id:"doner-burger",cat:"burgers",name:"Doner meat burger",price:5,icon:"🍔"},
  {id:"chips-small",cat:"sides",name:"Chips – small",price:3,icon:"🍟"},
  {id:"chips-large",cat:"sides",name:"Chips – large",price:3.5,icon:"🍟"},
  {id:"cheesy-small",cat:"sides",name:"Cheesy chips – small",price:3.5,icon:"🧀"},
  {id:"cheesy-large",cat:"sides",name:"Cheesy chips – large",price:4,icon:"🧀"},
  {id:"onion-rings",cat:"sides",name:"Onion rings (8 pcs)",price:4,icon:"🧅"},
  {id:"nuggets",cat:"sides",name:"Nuggets (8 pcs)",price:5,icon:"🍗"},
  {id:"garlic-mushrooms",cat:"sides",name:"Garlic mushrooms (8 pcs)",price:4,icon:"🍄"},
  {id:"jalapeno",cat:"sides",name:"Jalapeno cream cheese (4 pcs)",price:4,icon:"🌶️"},
  {id:"mozzarella",cat:"sides",name:"Mozzarella fingers (4 pcs)",price:4,icon:"🧀"},
  {id:"hot-wings",cat:"sides",name:"Hot wings (5 pcs)",price:5.5,icon:"🍗"},
  {id:"chicken-strips",cat:"sides",name:"Chicken strips (5 pcs)",price:5.95,icon:"🍗"},
  {id:"curly-fries",cat:"sides",name:"Curly fries",price:5,icon:"🍟"},
  {id:"side-salad",cat:"sides",name:"Side salad",price:3,icon:"🥗"},
  {id:"sauce",cat:"sides",name:"Pot of sauces",price:.7,desc:"Chilli, garlic mayo, yoghurt, BBQ or mayo",icon:"🥣"},
  {id:"quarter-meal",cat:"meals",name:"¼ beef burger meal deal",price:8.5,desc:"¼ beef burger + chips + drink",icon:"🍔"},
  {id:"half-meal",cat:"meals",name:"½ beef burger meal deal",price:9.5,desc:"½ beef burger + chips + drink",icon:"🍔"},
  {id:"chicken-meal",cat:"meals",name:"Chicken burger meal deal",price:8.5,desc:"Chicken burger + chips + drink",icon:"🍔"},
  {id:"kids-meal",cat:"meals",name:"Kids 6x nuggets meal deal",price:7.5,desc:"6x nuggets + chips + drink",icon:"🍟"},
  {id:"strips-meal",cat:"meals",name:"6x chicken strips meal deal",price:8.5,desc:"6x chicken strips + chips + drink",icon:"🍗"},
  {id:"wings-meal",cat:"meals",name:"6x hot wings meal deal",price:8.5,desc:"6x hot wings + chips + drink",icon:"🍗"},
  {id:"soft-drink",cat:"drinks",name:"Soft drink (can)",price:1.5,desc:"Pepsi, Diet Pepsi, 7UP, Tango Orange or Dr Pepper",icon:"🥤"},
  {id:"water",cat:"drinks",name:"Water (500ml)",price:1.2,icon:"💧"},
  {id:"pepsi-bottle",cat:"drinks",name:"Pepsi 1.5 litre",price:3,icon:"🥤"},
  {id:"ice-cream",cat:"drinks",name:"Ben & Jerry's ice cream (500ml)",price:6.5,icon:"🍨"}
];
const cart = [];
let category = "all";
const pounds = n => "£" + n.toFixed(2);
const grid = document.getElementById("products-grid");
function renderProducts(){
  const q=document.getElementById("menu-search").value.trim().toLowerCase();
  const list=menu.filter(p=>(category==="all"||p.cat===category)&&(`${p.name} ${p.desc||""}`).toLowerCase().includes(q));
  grid.innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-art">${p.icon}</div><div class="product-info"><h3>${p.name}</h3><p class="product-desc">${p.desc||""}</p><div class="product-bottom"><span class="price">${p.sizes?`<small>Medium ${pounds(p.sizes[0][1])} · Large ${pounds(p.sizes[1][1])}</small>`:pounds(p.price)}</span><button class="add-button" data-add="${p.id}">+ Add</button></div></div></article>`).join(""):`<div class="no-results">No menu items found. Try another search.</div>`;
}
function addItem(id,sizeName=null){
  const p=menu.find(x=>x.id===id); const size=p.sizes?.find(s=>s[0]===sizeName);
  const name=p.name+(size?` (${size[0]})`:"");
  const price=size?size[1]:p.price;
  const key=id+(sizeName||"");
  const existing=cart.find(x=>x.key===key);
  if(existing)existing.qty++;else cart.push({key,id,name,price,qty:1});
  renderCart();toast(`${name} added to basket`);
}
function renderCart(){
  const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.qty*x.price,0);
  document.getElementById("cart-count").textContent=count;document.getElementById("side-count").textContent=count;
  document.getElementById("basket-total").textContent=pounds(total);
  document.getElementById("checkout-total").textContent=pounds(total);
  document.getElementById("checkout-button").disabled=!count;
  document.getElementById("basket-items").innerHTML=count?cart.map(x=>`<div class="basket-line"><div><b>${x.name}</b><small>${pounds(x.price)} each</small></div><div class="quantity"><button data-change="${x.key}" data-delta="-1">−</button><span>${x.qty}</span><button data-change="${x.key}" data-delta="1">+</button></div></div>`).join(""):`<div class="empty-basket">Your basket is waiting for something delicious.</div>`;
}
function toast(s){const t=document.getElementById("toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1700)}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const p=menu.find(x=>x.id===b.dataset.add);if(p.sizes){const choice=prompt(`Choose a size for ${p.name}:\n1. Medium ${pounds(p.sizes[0][1])}\n2. Large ${pounds(p.sizes[1][1])}\nEnter 1 or 2:`);if(choice==="1")addItem(p.id,"Medium");else if(choice==="2")addItem(p.id,"Large");}else addItem(p.id)});
document.getElementById("basket-items").addEventListener("click",e=>{const b=e.target.closest("[data-change]");if(!b)return;const item=cart.find(x=>x.key===b.dataset.change);if(!item)return;item.qty+=Number(b.dataset.delta);if(item.qty<=0)cart.splice(cart.indexOf(item),1);renderCart()});
document.getElementById("category-tabs").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;category=b.dataset.category;document.querySelectorAll("[data-category]").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
document.getElementById("menu-search").addEventListener("input",renderProducts);
const modal=document.getElementById("checkout-modal");
document.getElementById("open-cart").addEventListener("click",()=>document.querySelector(".basket-card").scrollIntoView({behavior:"smooth"}));
document.getElementById("checkout-button").addEventListener("click",()=>{document.getElementById("order-review").hidden=true;document.getElementById("checkout-form").hidden=false;modal.hidden=false});
document.getElementById("close-checkout").addEventListener("click",()=>modal.hidden=true);
modal.addEventListener("click",e=>{if(e.target===modal)modal.hidden=true});
document.getElementById("checkout-form").addEventListener("submit",e=>{
 e.preventDefault();const data=new FormData(e.target);const type=data.get("orderType");if(type==="Delivery"&&!String(data.get("address")).trim()){alert("Please enter your delivery address.");return}
 const total=cart.reduce((s,x)=>s+x.qty*x.price,0);
 const lines=cart.map(x=>`${x.qty} x ${x.name} — ${pounds(x.qty*x.price)}`).join("\n");
 const summary=`ANATOLIA TAKE AWAY — ORDER REQUEST\n\n${lines}\n\nSubtotal: ${pounds(total)}\nOrder type: ${type}\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nAddress: ${data.get("address")||"Not applicable"}\nNotes: ${data.get("notes")||"None"}`;
 document.getElementById("checkout-form").hidden=true;const review=document.getElementById("order-review");review.hidden=false;review.innerHTML=`<h3>Order request prepared</h3><p class="review-box"></p><p class="form-disclaimer">This is not yet a confirmed order. The restaurant's order receiving system and payment provider still need to be connected.</p><button class="button button-red full" id="copy-order">Copy order details</button>`;
 review.querySelector(".review-box").textContent=summary;
 document.getElementById("copy-order").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(summary);toast("Order details copied")}catch{toast("Please select and copy the order details")}});
});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();
