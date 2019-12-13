import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import '../ColorBox.css'

export default class ColorBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copied: false,
            snackbarOpen: false
        };

        this.changeCopyState = this.changeCopyState.bind(this)
        this.closeSnackBar = this.closeSnackBar.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true, snackbarOpen: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    closeSnackBar() {
        this.setState({
            snackbarOpen: false
        })
    }

    render() {

        const { name, background } = this.props;
        const copied = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
                <div style={{ background }} className="ColorBox">
                    {/* <div style={{ background }} className={`copy-overlay ${copied && "show"}`} /> */}
                    {/* <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p>{this.props.background}</p>
                    </div> */}

                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        open={this.state.snackbarOpen}
                        autoHideDuration={3000}
                        message={"Copied to clipboard!"}
                        onClose={this.closeSnackBar}
                        action={[
                            <IconButton
                                onClick={this.closeSnackBar}
                                color="inherit"
                                key="close"
                                aria-label="close">

                                <CloseIcon />
                            </IconButton>
                        ]} />

                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>

                        <button className="copy-button">Copy</button>
                    </div>

                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}