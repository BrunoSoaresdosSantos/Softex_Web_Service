
public class Server {
    public static void main(String[] args) throws Exception {
        JaxWsServerFactoryBean factory = new JaxWsServerFactoryBean();
        factory.setServiceClass(Calculator.class);
        factory.setAddress("http://localhost:8080/calculator");
        factory.setServiceBean(new CalculatorImpl());
        Server server = factory.create();
        server.start();
    }
}