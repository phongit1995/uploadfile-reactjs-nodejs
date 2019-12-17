import React, {Component} from 'react';
import Upload from './component/upload';
import ListItem from './component/listitems';
class App extends Component {
    render(){
        return (
            <div className="container">
        <div className="row pt-5 main" >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div>
              <h1 className="text-center">Upload Hình Ảnh</h1>
            </div>
          </div>
          <ListItem/>
          <Upload />

        </div>
      </div>
        )
    }
}
export default App ;