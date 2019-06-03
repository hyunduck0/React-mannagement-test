import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render(){
        return (
                <TableRow>
                    <TableCell> {this.props.id}</TableCell>
                    <TableCell> <img src={this.props.image} alt="profile"/></TableCell>
                    <TableCell> {this.props.name}</TableCell>
                    <TableCell> {this.props.birthday}</TableCell>
                    <TableCell> {this.props.gender}</TableCell>
                    <TableCell> {this.props.job} </TableCell>
                </TableRow>
        )
    }
}


/*
function Customer({name, birthday, gender,job}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    );
}
*/
export default Customer;