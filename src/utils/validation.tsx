import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


interface Payload {
    status: number;
    error: string
}

type Props = {
    loading?: boolean;
    redirect: boolean;
};

type State = {
    loading?: boolean;
    redirect: boolean;
};

declare function fetch<T>(...args: any): Promise<Payload>


export default function withAuth(ComponentToProtect: React.ComponentType) {

  return class extends Component<Props, State> {

    constructor(props: Props) {
      super(props);
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {

        fetch<Payload>('/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
              throw new Error(res.error);
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;

      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
        return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}
