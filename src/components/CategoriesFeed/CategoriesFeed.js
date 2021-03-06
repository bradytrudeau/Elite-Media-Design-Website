import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CategoriesFeed.css';

function CategoriesFeed() {
  // Initializing state
  const [categories, setCategories] = useState([]);
  // GETs the existing categories from API
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/categories'
    }).then(response =>{
      setCategories(response.data.categories);
      console.log('Response:', response.data.categories);
      
    }).catch(err =>{
      console.log('Error in GET', err);
    });
    }, []);

  return (
    <div id='categories' className='categories-feed'>
      <h2>Categories</h2>
      <Grid container justify="center" spacing={1}>
        {categories.map((category, i) => 
          <Grid item>
            <Card
              style={{width: "250px"}}
              className='card'
            >
                <CardMedia
                  image={category.strCategoryThumb}
                  title={category.strCategory}
                  style={{ height: "200px" }}
                />
                <CardContent className="cards">
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.strCategory}
                  </Typography>
                  {/* <Typography variant="body2" component="p">
                    {category.strCategoryDescription}
                  </Typography> */}
                </CardContent>
            </Card>
          </Grid>
          )}
      </Grid>
    </div>
  );
} 



export default CategoriesFeed;