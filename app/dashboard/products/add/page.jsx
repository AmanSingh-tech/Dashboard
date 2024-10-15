import addProducts from '@/app/lib/aciton';
import styles from '@/app/ui/dashboard/products/add/addProducts.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Add New Product</h1>
      <form  action={addProducts} className={styles.form}>
        <input 
          type='text' 
          placeholder='Product Title' 
          name='title' 
          className={styles.inputField} 
          required 
        />

        <select 
          name='category' 
          id='category' 
          className={styles.selectField} 
          required
        >
            <option value='general'>Choose a Category</option>
            <option value='kitchen'>Kitchen</option>
            <option value='phone'>Phone</option>
            <option value='computer'>Computer</option>
        </select>

        <input 
          type='number' 
          placeholder='Price' 
          name='price' 
          className={styles.inputField} 
          required 
        />

        <input 
          type='number' 
          placeholder='Stock' 
          name='stock' 
          className={styles.inputField} 
          required 
        />

        <input 
          type='text' 
          placeholder='Color' 
          name='color' 
          className={styles.inputField} 
        />

        <input 
          type='text' 
          placeholder='Size' 
          name='size' 
          className={styles.inputField} 
        />

        <textarea 
          name='desc' 
          id='desc' 
          rows="10" 
          placeholder='Description' 
          className={styles.textareaField} 
          required
        />

        <button 
          type='submit' 
          className={styles.submitButton}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProductPage;
