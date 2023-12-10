import com.example.feast.Entity.Category;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

    public class CategoryTest {

        @Test
        public void testGetterAndSetter() {
            Category category = new Category();

            category.setId(1);
            category.setName("Test Category");

            assertEquals(1, category.getId());
            assertEquals("Test Category", category.getName());
        }

        @Test
        public void testDefaultConstructor() {
            Category category = new Category();
            assertNull(category.getId());
            assertNull(category.getName());
        }
    }

