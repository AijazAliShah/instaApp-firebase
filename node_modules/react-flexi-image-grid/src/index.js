import React from "react";
import "./styles/index.css";
import _ from "lodash";

class FlexiImageGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            images: props.images || [],
            numberOfColumns: props.numberOfColumns || 4,


            //internal usage
            numberOfImagesPerColumn: 0,
        };

        this.imgOnClick = this.imgOnClick.bind(this);
    }

    imgOnClick = (e) => {
        _.invoke(this.props, 'onClick', e, {});
    };

    componentWillMount() {
        this.calcNumberOfImagesPerColumns();
    }

    calcNumberOfImagesPerColumns = () => {
        let countImages = this.state.images.length || 0;

        let nOfColumns = this.state.numberOfColumns;
        if (nOfColumns !== 1 || nOfColumns !== 2 || nOfColumns !== 4) {
            nOfColumns = 4;
        }

        let numberOfImagesPerColumns = Math.ceil(countImages / nOfColumns);

        this.setState({numberOfImagesPerColumns});
    };


    render = () => {

        let groupArr = [];
        let counter = 0;
        let images = this.state.images;
        for (let imageSrc of images) {

            if (groupArr[counter]) {
                groupArr[counter].push(imageSrc);

            } else {
                groupArr[counter] = [];
                groupArr[counter].push(imageSrc);
            }

            if (groupArr[counter].length === this.state.numberOfImagesPerColumns) {
                counter++;
            }

        }

        let flexStyle = {};
        let nOfColumns = this.state.numberOfColumns;
        if (nOfColumns === 1) {
            flexStyle.msFlex = "100%";
            flexStyle.flex = "100%";
        } else if (nOfColumns === 2) {
            flexStyle.msFlex = "50%";
            flexStyle.flex = "50%";
        } else if (nOfColumns === 4) {
            flexStyle.msFlex = "25%";
            flexStyle.flex = "25%";
        } else {
            flexStyle.msFlex = "25%";
            flexStyle.flex = "25%";
        }

        return (
            <div className="react-flexi-image-grid">
                <div className="rowGridFlex">
                    {
                        groupArr.map((group, groupIndex) => {
                            return (
                                <div key={groupIndex} className="columnGridFlex" style={flexStyle}>
                                    {
                                        group.map((image, imgIndex) => {
                                            return (
                                                <img

                                                    id={image.id || ""}
                                                    className={image.className || ""}
                                                    key={imgIndex}
                                                    src={image.src}
                                                    alt={image.alt || ""}
                                                    style={{width: "100%", height: image.height || ""}}

                                                    onClick={this.imgOnClick}


                                                />
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }


                </div>
            </div>
        );

    }

}

export {FlexiImageGrid};