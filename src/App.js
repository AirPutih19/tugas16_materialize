import React,{Component} from "react";
import { Caption, Col, Slide, Slider, Card, Row, CardTitle, } from "react-materialize";

class App extends Component{
  render(){
    return(
      <div>
        <Slider
            fullscreen={false}
            options={{
              duration: 500,
              height: 350,
              indicators: true,
              interval: 6000
            }}
          >
            <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
              <Caption placement="center">
                <h3>
                  Pantai
                </h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"/>}>
              <Caption placement="left">
                <h3>
                  Paris
                </h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan Kesempatan Jalan - Jalan Ke Paris Dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>
            <Slide image={<img alt="" src="https://ik.imagekit.io/tvlk/blog/2021/11/Destinasi-Wisata-Swiss-Matterhorn-Shutterstock.jpg?tr=dpr-2,w-675"/>}>
              <Caption placement="right">
                <h3>
                  Swiss
                </h3>
                <h5 className="light grey-text text-lighten-3">
                Dapatkan Kesempatan Jalan - Jalan Ke Swiss Dengan Membeli Sebuah Product
                </h5>
              </Caption>
            </Slide>
          </Slider>
            HotList
          <Row>
            <Col m={3}>
            <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
              Audio
            </CardTitle>} >
              Audio Techina - Mulai Dari <a href="/" className="harga">Rp 910rb</a>
            </Card>
            </Col>
            <Col m={3}>
            <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
              Handphone
            </CardTitle>} >
              Handphone Samsung - Mulai Dari <a href="/" className="harga">Rp 200rb</a>
            </Card>
            </Col>
            <Col m={3}>
            <Card className="small" header={<CardTitle  image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
              Squishy
            </CardTitle>} >
              Squishy - Mulai Dari <a href="/" className="harga">Rp 5,5rb</a>
            </Card>
            </Col>
            <Col m={3}>
            <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
              Koleksi The Avenger
            </CardTitle>} >
              Koleksi The Avenger - Mulai dari <a href="/" className="harga">Rp 10rb</a> 
            </Card>
            </Col>


          </Row>



      </div>
    );
  }
}

export default App;
