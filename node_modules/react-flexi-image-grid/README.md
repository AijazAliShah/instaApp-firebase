# react-flexi-image-grid
React js Flexible Image Grid View

<h2>How to install ?</h2> 
<pre>
yarn add react-flexi-image-grid
</pre>


<br />
<br />

<h2>Examples:</h2>

 <h2>4 Columns:</h2>
 
![4 columns pics](./example-pics/ss1.png)

 <h2>2 Columns:</h2>
 
![2 columns pics](./example-pics/ss3.png)


<h1>How to use it ? </h1>

```

import React, {Component} from "react";
import {FlexiImageGrid} from "react-flexi-image-grid";


class App extends Component {

    onClickHandler = (e) => {
        console.log(e.target.id);
        console.log(e.target.className);
        console.log(e.target.src);

    };

    render() {
        return (
            <div className="App">

                <FlexiImageGrid
                    images={[

                        {
                            src: "https://images.wallpaperscraft.com/image/girl_back_dress_120695_1920x1080.jpg",
                            className: "img1",
                            id: "idImg1",
                            height: "200px",
                            alt: "here 1",
                        },

                        {
                            src: "https://images.wallpaperscraft.com/image/auto_sports_car_red_120693_1920x1080.jpg",
                            className: "img2",
                            height: "",

                        },

                        {
                            src: "https://images.wallpaperscraft.com/image/auto_side_view_sports_car_red_118923_1920x1080.jpg",
                            className: "img4"
                        },

                        {
                            src: "https://images.wallpaperscraft.com/image/auto_side_view_sports_car_117332_1920x1080.jpg",
                            className: "img5"
                        }
                        ,
                        {
                            src: "https://i.pinimg.com/originals/6f/55/26/6f5526229f0b3f18e1cf64bd4eb5a62f.jpg",
                            className: "img6"
                        }

                    ]}

                    numberOfColumns={4}
                    onClick={this.onClickHandler}

                />

            </div>
        );
    }
}

export default App;


```

<h2>Expected Props:</h2>

1- `images` , it's an array of objects , each object can have the following structure:
```
{

	src: "https://www.w3schools.com/w3images/wedding.jpg",
	className: "img1",
	id: "idImg1",
	height: "200px",
	alt: "here 1",

   }
```


2- `numberOfColumns` it can be 1, 2 ,or 4 
