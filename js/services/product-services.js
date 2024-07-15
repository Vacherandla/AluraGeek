async function productList() {
    try {
        const res = await fetch("http://localhost:3001/Products");
        return res.json();
    }
    catch (error) {
        console.log(error);
    }
}



const createProducts = async (name, price, img) => {
    try {
        const res = await fetch("http://localhost:3001/Products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, price, img })
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}


const deleteProducts = async (id) =>{
    try{
        console.log(id)
        const res = await fetch(`http://localhost:3001/Products/${id}`,{
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    }catch(err){
        return console.log(err);
    }
}

export const serviceProducts = {
    productList, createProducts, deleteProducts
}

/* const productList = async () => {
    try {
        const res = await fetch('http://localhost:3001/Products');
        return res.json;
    } catch (error) {
        return console.log(error);
    }
}
export const serviceProducts = {
    productList
}; */

/* const productList = async () => {
    try {
        const response = await fetch('http://localhost:3001/Products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const serviceProducts = async (
    productList,
) => {
} 

const createProducts = (name,price,img)=>{
    return fetch("http://localhost:3001/Products", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name,price,img})
    }).then((res)=>res.json()).catch((err)=>console.log(err))
}

export const serviceProducts = {
    productList,createProducts
}
*/