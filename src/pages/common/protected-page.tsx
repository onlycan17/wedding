import withAuth from '../common/with-auth';

const ProtectedPage = () => {
    return <div>This is a protected page.</div>;
};

export default withAuth(ProtectedPage);