import React from "react"
import styles from "../components/Error.module.css"

const Error = () => {
  return (
      <div classList={styles.item}>
        <h3>HTTP 404: Did you enter the wrong URL?</h3>
        <h4>Please click <a href="/">here</a> to return to the tracker app.</h4>
        <img src="https://images.pexels.com/photos/3752834/pexels-photo-3752834.jpeg"></img>
    </div>
  )
}
export default Error