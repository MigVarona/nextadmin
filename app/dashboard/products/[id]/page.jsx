

import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";


const SingleProductPage = () => {
    return (

        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt="" fill />
            </div>
            Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="John Doe" />
                <label>Price</label>
                <input type="number" name="price" placeholder="JohnDoe@gmail.com" />
                <label>Stock</label>
                <input type="number" name="stock"  placeholder="23"/>
                <label>Color</label>
                <input type="text" name="size" placeholder="" />
                <label>Size</label>
                <textarea type="text" name="address" placeholder="Madrid" />
                <label>Cat</label>
                <select name="cat" id="cat">
                <option value="Kitchen">Kitchen</option>
                <option value="computers">computers</option>
                </select>
                <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                <button>Update</button>
                </form>
                
            </div>
        </div>
    )
}


export default SingleProductPage;