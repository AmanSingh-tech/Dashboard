import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/dashboard/products/products.module.css';
import { fetchProducts } from "@/app/lib/data";
import { deleteProducts } from "@/app/lib/aciton";

const Productpage = async () => {
  let Products = [];

  try {
    Products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div className={styles.container}>
      <div>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product, index) => (
            <tr key={index}>
              <td>
                <div className={styles.tableImageContainer}>
                  <Image
                    src="/avatar.png"
                    height={40}
                    width={40}
                    className={styles.tableImage}
                    alt="Product Image"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{new Date(product.createdAt).toLocaleDateString()}</td> {/* Use actual createdAt */}
              <td>{product.stock > 0 ? product.stock : 'Out of Stock'}</td> {/* Show actual stock */}
              <td>
                <Link href={`products/singleProduct/${product.id}`}>
                  <button className={`${styles.actionButton} ${styles.viewButton}`}>View</button>
                </Link>
                <form action={deleteProducts}>
                  <input type="hidden" name="id" value={product.id}></input>
                <button className={`${styles.actionButton} ${styles.deleteButton}`}>Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Productpage;
