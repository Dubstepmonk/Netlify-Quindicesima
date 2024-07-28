package Email;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.spring.VelocityEngineUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import Model.Person;

@Service
public class EmailService {
	@Autowired
    private JavaMailSender mailSender;
//    private VelocityEngine velocityEngine;
//
//    public void setMailSender(JavaMailSender mailSender) {
//        this.mailSender = mailSender;
//    }
//
//    public void setVelocityEngine(VelocityEngine velocityEngine) {
//        this.velocityEngine = velocityEngine;
//    }
    
	public void sendEmail(Person person) {
		VelocityEngine velocityEngine = new VelocityEngine();
		velocityEngine.init();
		VelocityContext context = new VelocityContext();
		
		MimeMessagePreparator preparator = new MimeMessagePreparator() {
			@Override
			public void prepare(MimeMessage mimeMessage) throws Exception {
				MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
				message.setTo(person.getEmail());
				message.setSubject("Registration Received");
				message.setFrom("jianzhong.heng@gmail.com"); // could be parameterized...
				Map model = new HashMap();
				String upperCaseFirstName= person.getFirstName().toUpperCase();
				String modifiedString = upperCaseFirstName.replace("", " ").trim() + "!";
				model.put("firstname", modifiedString);
				String text = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine,
						"src/main/resources/registration-confirmation.vm", model);
				message.setText(text, true);
			}

		};
		 this.mailSender.send(preparator);
		 System.out.println("Email successfully sent.");
	}
}
