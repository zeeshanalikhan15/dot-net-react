import React, { Component } from 'react';

export class MyFunnyJokes extends Component {
    static displayName = MyFunnyJokes.name;

    constructor(props) {
        super(props);
        this.state = { jokes: [], loading: true };
    }

    componentDidMount() {
        this.fetchJokes();
    }

    static renderJokesTable(jokes) {
        return (
            <table className='table table-striped' aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Joke</th>
                    </tr>
                </thead>
                <tbody>
                    {jokes.map(joke =>
                        <tr key={joke.id}>
                            <td>{joke.id}</td>
                            <td>{joke.joke}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : MyFunnyJokes.renderJokesTable(this.state.jokes);

        return (
            <div>
                <h1 id="tableLabel">My Funny Jokes</h1>
                <p>This component fetches funny jokes from the server.</p>
                {contents}
            </div>
        );
    }

    async fetchJokes() {
        try {
            const response = await fetch('funnyjokes');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ jokes: data, loading: false });
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    }
}
