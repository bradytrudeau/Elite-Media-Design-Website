import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import seo from '../../images/seo.png';
import website from '../../images/website.png';
import ecommerce from '../../images/ecommerce.png';
import graphicDesign from '../../images/graphicdesign.png';
import email from '../../images/email.png';
import photography from '../../images/photography.png';
import videography from '../../images/videography.png';
import './Services.css';


function Services() {

  return (
    <div id='services' className='services'>
      <h2>Our Services</h2>
      <Grid container justify="center" spacing={3}>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={seo}
                  title="SEO"
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    SEO
                  </Typography>

                </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={website}
                  title="Website"
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    Website
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={ecommerce}
                  title='E-Commerce'
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    E-Commerce
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={graphicDesign}
                  title="Graphic Design"
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    Graphic Design
                  </Typography>

                </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={email}
                  title="Email Marketing"
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    Email Marketing
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={photography}
                  title='Photography'
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    Photography
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{width: "275px"}}
            >
                <CardMedia
                  image={videography}
                  title='Videography'
                  style={{ height: "150px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    Videography
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Grid>

    </div>
  );
} 



export default Services;