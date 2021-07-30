import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Route, Switch,
    RouteComponentProps
} from 'react-router-dom'
import logging from './config/logging'
import routes from './config/routes'


const Application: React.FunctionComponent<{}> = props => {

    useEffect(() => {
        logging.info(`loading application`)
    }, [])

    return (
        <div>
            <BrowserRouter>

                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact} //   is this okay?..
                            render={(props: RouteComponentProps<any>) => (
                                <route.component
                                    name={route.name}
                                    {...props}
                                    {...route.props}
                                />
                            )}
                        />
                    )
                })}

            </BrowserRouter>
        </div>
    )
}

export default Application