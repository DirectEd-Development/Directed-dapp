import { useState } from "react";
import { nftUpdate } from "../lib/api";
import styles from "../styles/NftUpdate.module.scss";

export default function NftUpdate() {
  const [metadata, setMetadata] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await nftUpdate.post(
        "/v2/UpdateMetadata/5edcc5ea-394c-4dea-9ee0-f91429534281/e569a247-5158-43f7-ba37-ada6cbe7d2aa",
        { metadata }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMetadata(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="metadata">New metadata:</label>
        <input
          type="text"
          id="metadata"
          name="metadata"
          value={metadata}
          onChange={handleChange}
        />
        <button type="submit">Update metadata</button>
      </form>
    </div>
  );
}
