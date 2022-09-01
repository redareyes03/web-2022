import { login, logout } from './actions'

export function mapStateToProps({ login }) {
    return {
        loginState: login.logged
    }
}
export function mapDispatchToProps(dispatch) {
    return {
        loginUser: () => dispatch(login()),
        logoutUser: () => dispatch(logout())
    }
}