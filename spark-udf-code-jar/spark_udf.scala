package sparkudf

import org.apache.spark.sql.functions._

object UDFs {

  import org.apache.spark.sql.expressions.UserDefinedFunction
  import org.apache.spark.sql.functions.udf

  def multiply1000(field: Double): Double = field * 1000
  def udfTimes1000 = udf(multiply1000 _)
}
