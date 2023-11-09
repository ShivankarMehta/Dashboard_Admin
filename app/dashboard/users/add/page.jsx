import styles from "../../../ui/dashboard/users/adduser/adduser.module.css";

const AdduserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="phone" name="phone" placeholder="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin ?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          <option value="compute">Computer</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false} selected>
            Is Admin ?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          <option value="compute">Computer</option>
        </select>
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdduserPage;
