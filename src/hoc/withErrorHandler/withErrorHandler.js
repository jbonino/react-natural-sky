import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxx from '../Auxx';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component{
        state ={
            error: null
        }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res=>res,err=>{
                this.setState({error:err});
            });
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmed = ()=>{
            this.setState({error:null});
        }
        render(){
            return (<div>
                <Auxx>
                    <Modal modalClosed={this.errorConfirmed}show={this.state.error}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrapperComponent {...this.props}/>
                </Auxx>
            </div>
            );
        }
    }
}

export default withErrorHandler;