import { useState } from 'react';
import image1 from '../Assets/Images/image-1.jpg';
import image2 from '../Assets/Images/image-2.jpg';
import image3 from '../Assets/Images/image-3.jpg';
import image4 from '../Assets/Images/image-4.jpg';
import image5 from '../Assets/Images/image-5.jpg';
import image6 from '../Assets/Images/image-6.jpg';
import '../Assets/index.css';

function Article() {

    const [image, setImage] = useState(image1);
    const imageArray1 = [image1, image2, image3];
    const imageArray2 = [image4, image5, image6];

    const loadImage = (event) => {
        setImage(event.target.src)
    }

    const arrayList1 = imageArray1.map((image) => {
        return (
            <div className="col w-100 p-0"><img onClick={loadImage} className="img-fluid" src={image} alt="cat" /></div>)

    });
    const arrayList2 = imageArray2.map((image) => {
        return (
            <div className="col p-0"><img onClick={loadImage} className="img-fluid" src={image} alt="cat" /></div>)
    })

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <h2>Some pretty cool article</h2>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col p-0">
                                <img className="img-fluid" src={image} alt="cat"/>
                            </div>
                        </div>
                        <div className="row">
                            {arrayList1}
                        </div>
                        <div className="row">
                            {arrayList2}
                        </div>
                    </div>
                    <div className="col-8">
                        <p>Grumpy Cat is quite possibly one of the most famous cats in history. She rose to fame in 2012 after a post of her face went viral on Reddit – at first,
                            no-one believed her face hadn’t been altered but in truth her grumpy markings were real. And soon everyone fell in love. According to her owners she was a very happy cat (despite the expression) with a type of dwarfism, and although she looked like a Snowshoe or Ragdoll, her parents were a Calico Short Hair and a grey tabby!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article