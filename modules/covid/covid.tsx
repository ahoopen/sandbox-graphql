import React from 'react';
import styled from 'styled-components';
import { Plain } from '../../components/plain/plain';
import { useCovidHistoricalQuery } from '../../codegen/_graphql';

const TitleSimple = styled.h1`
    color: #00ade6;
    font-size: 24px;
`;

type Props = {
    ssr?: boolean;
};

export const Covid = ({ ssr = true }: Props) => {
    const { data } = useCovidHistoricalQuery({
        ssr,
        variables: {
            days: 4,
            country: 'Netherlands',
        },
    });

    if (!data || !data.covidHistorical) {
        return null;
    }

    const { dates, results } = data.covidHistorical;

    // feel free to plot it in any graph you like, this is a simple example
    return (
        <Plain>
            <TitleSimple>Covid</TitleSimple>
            <p>
                {results.map((item, i) => {
                    return (
                        <p>
                            <strong>{item.province || 'no province'}</strong>
                            <br />
                            {dates.map((date, n) => {
                                return (
                                    <>
                                        <i>{date}</i>: death: {item.deaths[n]},
                                        recovered: {item.recovered[n]}
                                        <br />
                                    </>
                                );
                            })}
                        </p>
                    );
                })}
            </p>
        </Plain>
    );
};