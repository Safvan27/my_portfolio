import React,{ Component } from 'react';
import { Tab, Tabs, Grid,Cell,Card,CardTitle,CardText,CardActions,CardMenu,Button,IconButton } from 'react-mdl';
import './Project.css';
class Project extends Component{
      constructor(props){
          super(props);
              this.state = {activeTab:0};
          }
      toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">
                    <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get  </Button>
                        <Button colored>Get </Button>
                        <Button colored>Get </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get  </Button>
                        <Button colored>Get </Button>
                        <Button colored>Get </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 3</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get  </Button>
                        <Button colored>Get </Button>
                        <Button colored>Get </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
      } else if (this.state.activeTab === 1){
        return(
            <div className="project-grid">
                    <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React 1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get  </Button>
                        <Button colored>Get </Button>
                        <Button colored>Get </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React 2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get  </Button>
                        <Button colored>Get </Button>
                        <Button colored>Get </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>React 3</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get  </Button>
                        <Button colored>Get </Button>
                        <Button colored>Get </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
        )
      } else if (this.state.activeTab === 2){
            return(
                <div className="project-grid">
                <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Angular 1</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get  </Button>
                    <Button colored>Get </Button>
                    <Button colored>Get </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Angular 2</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get  </Button>
                    <Button colored>Get </Button>
                    <Button colored>Get </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Angular 3</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get  </Button>
                    <Button colored>Get </Button>
                    <Button colored>Get </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
            )
      } else if(this.state.activeTab === 3){
          return(
            <div className="project-grid">
            <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Other 1</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get  </Button>
                <Button colored>Get </Button>
                <Button colored>Get </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Other 2</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get  </Button>
                <Button colored>Get </Button>
                <Button colored>Get </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        <Card shadow={5} style={{width: '400px', margin: '1px 10px 1px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Other 3</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get  </Button>
                <Button colored>Get </Button>
                <Button colored>Get </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
          )
      }
      }
      render(){
          return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                    <Tab>Collage Project</Tab>
                    <Tab>React JS</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Other</Tab>

                </Tabs>

                <section >
                    <Grid>
                        <Cell col={12}>
                            <div >
                            {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>

            </div>  
            )
      }
  }
  

  export default Project;