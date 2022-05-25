import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import styles from './navbar.module.css'


export default function  Navbar (){
  
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': 'ef52954123mshbed3e4812fe92c6p1ca826jsn49cc99760de8'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

    return (
        <div className={ styles.navbar }>
          <div className={ styles.message}>
            <h3 className={ styles.align }>Message</h3>
            <div className={ `${styles.align} ${ styles.search}` }>
              <FontAwesomeIcon icon={ faSearch }  />
              <input type="text" placeholder="search message"  />
            </div>
          </div>

          <div className={ `${styles.align} ${styles.lang}` }>
            <div className={ styles.dropdown }>
              <ul>
                <li>English</li>
                {/* <li>Spanish</li>
                <li>Arabic</li> */}
              </ul>
              <FontAwesomeIcon className="arrowIcon" icon={ faArrowDown } size="sm" />
            </div>
          </div>
        </div>
    )
}