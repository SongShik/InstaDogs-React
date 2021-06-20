import React from 'react';
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({photo , setModalPhoto}) => {

    const { data , loading , error, request} = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const {url, options} = PHOTO_GET(photo.id)
            const {response , json} = await request(url, options);
            console.log(json);
        }
        fetchPhotos();
    }, [photo,request]);

    function handleOutisideClick(event){
        if(event.target === event.currentTarget) setModalPhoto(null);
    }

    return (
        <div className={styles.modal} onClick={handleOutisideClick}>
            {error && <Error  error={error}/>}
            {loading &&  <Loading/>}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal
