import React from 'react';
import LikeButton from './components/LikeButton'
import FileUploader from './components/FileUploader'
import styles from './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.app}>
          <LikeButton />
          <FileUploader />
        </div>
    );
  }
}