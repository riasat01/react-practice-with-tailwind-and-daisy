const Link = ({fakeRoute}) => {
    const {path, name} = fakeRoute
    return (
        <li>
        <a href={path}>{name}</a>
        </li>
    );
};

export default Link;